class Article < ActiveRecord::Base
	validates_presence_of :content, :author, :title
end
