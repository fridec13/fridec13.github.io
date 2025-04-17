source "https://rubygems.org"

# Jekyll 정적 사이트 생성기
gem "jekyll", "~> 4.3.3"

# Ruby 3.4+ 호환성을 위한 gem
gem "csv", "~> 3.3.0"
gem "logger", "~> 1.5.3"
gem "base64", "~> 0.2.0"

# Jekyll 플러그인 그룹
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-seo-tag", "~> 2.8.0"
  gem 'jekyll-tagging'
  gem "jekyll-sitemap"
  gem "jekyll-include-cache"
  gem "jekyll-redirect-from"
  gem "jekyll-paginate"
end

# Windows and JRuby 환경을 위한 플랫폼 전용 gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows 환경에서 성능 개선을 위한 선택적 gem
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Ruby 3+ 호환성을 위한 선택적 gem
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
gem "webrick", "~> 1.8"

# Windows 환경에서 파일 변경 감지를 위한 gem
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
