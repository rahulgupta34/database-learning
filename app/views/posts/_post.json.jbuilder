json.extract! post, :id, :body, :description, :created_at, :updated_at
json.url post_url(post, format: :json)
