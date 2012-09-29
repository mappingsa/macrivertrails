require 'slim'

set :slim, {
  :layout_engine => :slim,
  :tabsize => 2,
  :format => :html5,
  :pretty => true,
  :disable_escape => true,
  :shortcut => {'@' => 'data-role', '#' => 'id', '.' => 'class'}  # Doesn't seem to work
  }

set :erb, {
  :layout_engine => :slim
}

###
# Compass
###

# Susy grids in Compass
# First: gem install susy --pre
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

helpers do
  def blank_line
    "\n\n"
  end

  def next_line
    "\n"
  end

  # returns relative path from current page to given path
  def relative_path_to(path)
    Pathname.new(path).relative_path_from Pathname.new(current_page.destination_path)
  end

  # returns relative path from current page to /images
  def images
    relative_path_to('images/')
  end

  def info
    relative_path_to('Info/')
  end




end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
