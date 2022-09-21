class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.date :year_published
      t.boolean :out_of_print
      t.decimal :cost, precision: 8, scale: 2

      t.timestamps
    end
  end
end
