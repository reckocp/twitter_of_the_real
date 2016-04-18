module ApplicationHelper
  def user_is_owner?(tweet)
    tweet.user == current_user
  end
end
