class CreateApplicants < ActiveRecord::Migration[5.1]
  def change
    create_table :applicants do |t|
      t.string :first_name
      t.string :last_name
      t.string :student_number, null: false
      t.string :email
      t.text :address

      t.timestamps
    end
  end
end
