class User < ApplicationRecord

    validates :name, :email, presence: true

    def self.allUsers
        User.all.order(id: :desc)
    end

    def self.toTOFrom(to,from)
        where(id: to..from)
    end

    def self.searchAll(to,from,name)
        toTOFrom(to,from).where(name: name)
    end

end
