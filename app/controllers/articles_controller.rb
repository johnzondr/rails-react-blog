class ArticlesController < ApplicationController

  def index
    @articles = Article.all.order(created_at: :desc)
    render json: @articles
  end
end
