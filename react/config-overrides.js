const path = require('path')
const fs = require('fs')

module.exports = function override(config, env) {
  config.plugins.push({
    apply: (compiler) => {
      console.log('apply hook activated!')

      compiler.hooks.done.tap('MoveAndRenameIndexHtml', (stats) => {
      console.log('done hook activated!')

        const buildDir = path.resolve(__dirname, '../jekyll/react-build')
        const targetDir = path.resolve(__dirname, '../jekyll/_includes')

        if (!fs.existsSync(targetDir)) {
          return
        }

        // index.html 파일 경로
        const indexPath = path.join(buildDir, 'index.html')
        const targetPath = path.join(targetDir, 'react-index.html')

        // 파일 복사 및 이름 변경
        fs.copyFileSync(indexPath, targetPath)
      })
    },
  })

  return config
}