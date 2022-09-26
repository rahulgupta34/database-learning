class Category < ApplicationRecord

    belongs_to :user, class_name: "User"
    validates :name, presence: true, uniqueness: true, length: { in: 4..10 }
    validates :user_id, uniqueness: true
end
