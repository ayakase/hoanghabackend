const Tour = require('../models/TourModel')
const Order = require('../models/OrderModel');
const Category = require('../models/CategoryModel');
const Location = require('../models/LocationModel');
const Region = require('../models/RegionModel');
const Advisory = require('../models/AdvisoryModel');
const Post = require('../models/PostModel')
const sequelize = require('../connect');
const Slider = require('../models/SliderModel');
const Count = require('../models/CountModel');
async function syncModelsSequentially() {
    try {
        // Sync Category model
        await sequelize.drop();

        await Category.sync({ force: true });
        console.log('Category table created');
        await Category.bulkCreate([
            {
                id: 1,
                name: "Du lịch Trong nước",
                note: "none",
                slug: "du-lich-trong-nuoc"
            },
            {
                id: 2,
                name: "Du lịch Quốc tế",
                note: "none",
                slug: "du-lich-quoc-te"
            }]),
            console.log('Input categories');

        await Region.sync({ force: true });
        console.log('Region table created');
        await Region.bulkCreate([
            {
                id: 1,
                name: "Du lịch miền Bắc",
                note: "none",
                category_id: 1,
                slug: "du-lich-mien-bac"
            },
            {
                id: 2,
                name: "Du lịch miền Trung",
                note: "none",
                category_id: 1,
                slug: "du-lich-mien-trung"
            },
            {
                id: 3,
                name: "Du lịch miền Nam",
                note: "none",
                category_id: 1,
                slug: "du-lich-mien-nam"
            },
            {
                id: 4,
                name: "Du lịch Châu Á",
                note: "none",
                category_id: 2,
                slug: "du-lich-chau-a"
            },
            {
                id: 5,
                name: "Du lịch Châu Âu",
                note: "none",
                category_id: 2,
                slug: "du-lich-chau-au"
            },
            {
                id: 6,
                name: "Du lịch Châu Mỹ",
                note: "none",
                category_id: 2,
                slug: "du-lich-chau-my"
            },
            {
                id: 7,
                name: "Du lịch Châu Úc",
                note: "none",
                category_id: 2,
                slug: "du-lich-chau-uc"
            }
        ])
        await Location.sync({ force: true });
        console.log('Location table updated');
        await Location.bulkCreate([
            {
                id: 1,
                name: "Du lịch Cát Bà",
                note: "none",
                region_id: 1,
                slug: "du-lich-cat-ba"
            },
            {
                id: 2,
                name: "Du lịch Hạ Long",
                note: "none",
                region_id: 1,
                slug: "du-lich-ha-long"
            },
            {
                id: 3,
                name: "Du lịch Sapa",
                note: "none",
                region_id: 1,
                slug: "du-lich-sapa"
            },
            {
                id: 4,
                name: "Du lịch Hà Nội",
                note: "none",
                region_id: 1,
                slug: "du-lich-ha-noi"
            },
            {
                id: 5,
                name: "Du lịch Ninh Bình",
                note: "none",
                region_id: 1,
                slug: "du-lich-ninh-binh"
            },
            {
                id: 6,
                name: "Du lịch Mộc Châu",
                note: "none",
                region_id: 1,
                slug: "du-lich-moc-chau"
            },
            {
                id: 7,
                name: "Du lịch Cô Tô",
                note: "none",
                region_id: 1,
                slug: "du-lich-co-to"
            },
            {
                id: 8,
                name: "Du lịch Tam Đảo",
                note: "none",
                region_id: 1,
                slug: "du-lich-tam-dao"
            },
            {
                id: 9,
                name: "Du lịch Đà Nẵng",
                note: "none",
                region_id: 2,
                slug: "du-lich-da-nang"
            },
            {
                id: 10,
                name: "Du lịch Hội An",
                note: "none",
                region_id: 2,
                slug: "du-lich-hoi-an"
            },
            {
                id: 11,
                name: "Du lịch Huế",
                note: "none",
                region_id: 2,
                slug: "du-lich-hue"
            },
            {
                id: 12,
                name: "Du lịch Quy Nhơn",
                note: "none",
                region_id: 2,
                slug: "du-lich-quy-nhon"
            },
            {
                id: 13,
                name: "Du lịch Lý Sơn",
                note: "none",
                region_id: 2,
                slug: "du-lich-ly-son"
            },
            {
                id: 14,
                name: "Du lịch Nghệ An",
                note: "none",
                region_id: 2,
                slug: "du-lich-nghe-an"
            },
            {
                id: 15,
                name: "Du lịch Quảng Bình",
                note: "none",
                region_id: 2,
                slug: "du-lich-quang-binh"
            },
            {
                id: 16,
                name: "Du lịch Phan Thiết",
                note: "none",
                region_id: 2,
                slug: "du-lich-phan-thiet"
            },
            {
                id: 17,
                name: "Du lịch Sầm Sơn",
                note: "none",
                region_id: 2,
                slug: "du-lich-sam-son"
            },
            {
                id: 18,
                name: "Du lịch Tây Nguyên",
                note: "none",
                region_id: 2,
                slug: "du-lich-tay-nguyen"
            },
            {
                id: 19,
                name: "Du lịch Đà Lạt",
                note: "none",
                region_id: 3,
                slug: "du-lich-cat-ba"
            },
            {
                id: 20,
                name: "Du lịch Côn Đảo",
                note: "none",
                region_id: 3,
                slug: "du-lich-da-lat"
            },
            {
                id: 21,
                name: "Du lịch Phú Quốc",
                note: "none",
                region_id: 3,
                slug: "du-lich-phu-quoc"
            },
            {
                id: 22,
                name: "Du lịch Cần Thơ",
                note: "none",
                region_id: 3,
                slug: "du-lich-can-tho"
            },
            {
                id: 23,
                name: "Du lịch Nha Trang",
                note: "none",
                region_id: 3,
                slug: "du-lich-nha-trang"
            },
            {
                id: 24,
                name: "Du lịch Sài Gòn",
                note: "none",
                region_id: 3,
                slug: "du-lich-sai-gon"
            },
            {
                id: 25,
                name: "Du lịch Cam Ranh",
                note: "none",
                region_id: 3,
                slug: "du-lich-cam-ranh"
            },
            {
                id: 26,
                name: "Du lịch Bình Phước",
                note: "none",
                region_id: 3,
                slug: "du-lich-binh-phuoc"
            },
            {
                id: 27,
                name: "Du lịch Campuchia",
                note: "none",
                region_id: 4,
                slug: "du-lich-campuchia"
            },
            {
                id: 28,
                name: "Du lịch Malaysia",
                note: "none",
                region_id: 4,
                slug: "du-lich-malaysia"
            },
            {
                id: 29,
                name: "Du lịch Thái Lan",
                note: "none",
                region_id: 4,
                slug: "du-lich-thai-lan"
            },
            {
                id: 30,
                name: "Du lịch Dubai",
                note: "none",
                region_id: 4,
                slug: "du-lich-dubai"
            },
            {
                id: 31,
                name: "Du lịch Nhật Bản",
                note: "none",
                region_id: 4,
                slug:  "du-lich-nhat-ban"
            },
            {
                id: 32,
                name: "Du lịch Singapore",
                note: "none",
                region_id: 4,
                slug: "du-lich-singapore"
            },
            {
                id: 33,
                name: "Du lịch Trung Quốc",
                note: "none",
                region_id: 4,
                slug: "du-lich-trung-quoc"
            },
            {
                id: 34,
                name: "Du lịch Vân Nam - Trung Quốc",
                note: "none",
                region_id: 4,
                slug: "du-lich-van-nam-trung-quoc"
            },
            {
                id: 35,
                name: "Du lịch Tây Âu",
                note: "none",
                region_id: 5,
                slug:  "du-lich-tay-au"
            },
            {
                id: 36,
                name: "Du lịch Pháp",
                note: "none",
                region_id: 5,
                slug: "du-lich-phap"
            },
            {
                id: 37,
                name: "Du lịch Bỉ",
                note: "none",
                region_id: 5,
                slug: "du-lich-bi"
            },
            {
                id: 38,
                name: "Du lịch Nga",
                note: "none",
                region_id: 5,
                slug: "du-lich-nga"
            },
            {
                id: 39,
                name: "Du lịch Mỹ",
                note: "none",
                region_id: 6,
                slug: "du-lich-my"
            },
            {
                id: 40,
                name: "Du lịch Canada",
                note: "none",
                region_id: 6,
                slug: "du-lich-canada"
            },
            {
                id: 41,
                name: "Du lịch Úc",
                note: "none",
                region_id: 7,
                slug: "du-lich-uc"
            },
            {
                id: 42,
                name: "Du lịch New Zealand",
                note: "none",
                region_id: 7,
                slug: "du-lich-new-zealand"
            }   
        ]
        )
        await Tour.sync({ force: true });
        console.log('Tour table created');
        await Count.sync({ force: true })
        console.log('Count Created')
        await Count.create({
            id: 1,
            count: 0
        });


        await Order.sync({ force: true });
        console.log('Order table created');

        await Advisory.sync({ force: true });
        console.log('Advisory table created');

        await Post.sync({ force: true });
        console.log('Post table created');

        await Slider.sync({ force: true });
        console.log('Slider table created');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
}

syncModelsSequentially();