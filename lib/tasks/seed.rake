namespace :seed do
  desc "TODO"
  task data: :environment do
    40.times do |i|
      if Post.new(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph ).save
        puts "Creating  post # #{i}"
      end
    end
  end

end
