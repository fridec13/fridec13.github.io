module Jekyll
  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      # 카테고리 디렉토리 확인
      category_dir = 'category'
      FileUtils.mkdir_p(category_dir) unless Dir.exist?(category_dir)

      # 각 카테고리별 페이지 생성
      site.categories.each do |category, posts|
        category_name = category.to_s.downcase.strip.gsub(' ', '-')
        
        site.pages << CategoryPage.new(site, site.source, category_dir, category, category_name)
      end
    end
  end

  # 카테고리 페이지 클래스
  class CategoryPage < Page
    def initialize(site, base, dir, category, category_name)
      @site = site
      @base = base
      @dir = dir
      @name = "#{category_name}.md"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category_page.html')
      
      self.data['title'] = "카테고리: #{category}"
      self.data['category'] = category
      self.data['permalink'] = "/category/#{category_name}/"
    end
  end
end 