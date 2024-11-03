const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function createEntrySymlink() {
  const targetPath = path.join('docs', 'collections', '_entry')
  const symlinkPath = '_entry'

  try {
    // 이미 존재하는 심볼릭 링크 확인 및 제거
    if (fs.existsSync(symlinkPath)) {
      fs.unlinkSync(symlinkPath)
      console.log('기존 심볼릭 링크 제거됨')
    }

    // Windows의 경우 mklink 명령어 사용
    if (process.platform === 'win32') {
      try {
        execSync(`mklink /D "${symlinkPath}" "${targetPath}"`, { shell: true })
        console.log('심볼릭 링크가 성공적으로 생성되었습니다.')
      }
      catch (error) {
        // mklink 실패 시 junction 생성 시도
        fs.symlinkSync(targetPath, symlinkPath, 'junction')
        console.log('junction 링크가 성공적으로 생성되었습니다.')
      }
    } else {
      // Windows가 아닌 경우 기존 방식 사용
      fs.symlinkSync(targetPath, symlinkPath, 'dir')
      console.log('심볼릭 링크가 성공적으로 생성되었습니다.')
    }
  } catch (error) {
    console.error('에러 발생:', error.message)

    // 추가적인 에러 정보 출력
    if (error.code === 'EPERM') {
      console.log('\n권한 관련 문제 해결 방법:')
      console.log('1. Windows 개발자 모드를 활성화하세요:')
      console.log('   설정 -> 개인정보 및 보안 -> 개발자용 -> 개발자 모드 켜기')
      console.log('2. 또는 명령 프롬프트를 관리자 권한으로 실행하세요.')
    }
  }
}

createEntrySymlink()