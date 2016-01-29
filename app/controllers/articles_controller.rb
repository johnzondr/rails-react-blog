class ArticlesController < ApplicationController

  def index
    @articles = Article.all.order(created_at: :desc)
    render json: @articles
  end

  def create
  	@article = Article.create(article_params)
  	render json: @article
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  private

  def article_params
  	{
  		title: params[:title], 
  		author: params[:author],
  		content: params[:content]
  	}
  end

end
