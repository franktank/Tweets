class Tweet < ActiveRecord::Base
  belongs_to :user

  def as_json(options={})
    super(methods: [:email, :gravatar])
  end

  def email
    user.email
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
    "http://www.gravatar.com/avatar/#{hash}"
  end
end
