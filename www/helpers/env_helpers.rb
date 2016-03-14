# Environment helpers
#
# Split-out into separate file, because Middleman helpers are no longer accessible from
# config.rb (only from templates)
#
# extend with this module at top of config.rb
# include this module in helpers do block

module EnvHelpers

  def build_target
    if ENV['MIDDLEMAN_BUILD_TARGET']
      ENV['MIDDLEMAN_BUILD_TARGET'].downcase
    else
      'debug'
    end
  end

end