class Book < ApplicationRecord

    default_scope { where(out_of_print: true) }
    scope :out_of_print, -> { where.not(out_of_print: false) }
    scope :not_out_of_print, -> { where(out_of_print: false) }
    scope :out_of_print_and_expensive, -> (amount) { out_of_print.where("cost > ?",amount) }

    # enum :status, [:shipped, :being_packaged, :complete, :cancelled]
    enum :status, [:being_packed, :shipped, :delivered, :cancelled, :complete]

    def self.created_befor_today(date)
        where("created_at < ?", date) if date.present?
    end

end
