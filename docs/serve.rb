require 'open3'

begin
  require 'win32/process' if Gem.win_platform?
rescue LoadError
  puts "win32-process gem을 로드할 수 없습니다. Windows 관련 기능이 제한될 수 있습니다."
end

puts "Jekyll 서버를 시작합니다..."

# Jekyll 서버 프로세스를 시작합니다.
jekyll_pid = spawn("bundle exec jekyll serve --livereload")

puts "Jekyll 서버가 시작되었습니다. 프로세스 ID: #{jekyll_pid}"
puts "서버를 종료하려면 아무 키나 누르세요."

# 사용자 입력을 기다립니다.
gets

# Jekyll 서버 프로세스를 종료합니다.
puts "Jekyll 서버를 종료합니다..."
Process.kill("TERM", jekyll_pid)
Process.wait(jekyll_pid)

puts "Jekyll 서버가 종료되었습니다."
