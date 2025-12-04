const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');

dotenv.config();

const experts = [
    {
        name: "Dr. Ananya Sharma",
        email: "ananya.sharma@example.com",
        password: "password123",
        role: "EXPERT",
        isVerified: true,
        expertProfile: {
            specialization: ["Astrology", "Vastu"],
            bio: "Certified Astrologer with 15 years of experience in Vedic Astrology and Vastu Shastra. Helping people find direction and peace.",
            experience: 15,
            languages: ["English", "Hindi", "Sanskrit"],
            hourlyRate: 1500,
            rating: 4.8,
            totalSessions: 1200,
            totalReviews: 850,
            isOnline: true,
            profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
            availability: [
                { day: "Monday", startTime: "10:00", endTime: "18:00" },
                { day: "Wednesday", startTime: "10:00", endTime: "18:00" },
                { day: "Friday", startTime: "10:00", endTime: "18:00" }
            ]
        }
    },
    {
        name: "Mystic Rahul",
        email: "rahul.mystic@example.com",
        password: "password123",
        role: "EXPERT",
        isVerified: true,
        expertProfile: {
            specialization: ["Tarot", "Numerology"],
            bio: "Intuitive Tarot Reader and Numerologist. I use my gifts to provide clarity on relationships, career, and personal growth.",
            experience: 8,
            languages: ["English", "Hindi"],
            hourlyRate: 800,
            rating: 4.5,
            totalSessions: 450,
            totalReviews: 320,
            isOnline: true,
            profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
            availability: [
                { day: "Tuesday", startTime: "12:00", endTime: "20:00" },
                { day: "Thursday", startTime: "12:00", endTime: "20:00" },
                { day: "Saturday", startTime: "10:00", endTime: "16:00" }
            ]
        }
    },
    {
        name: "Pandit Ji",
        email: "pandit.ji@example.com",
        password: "password123",
        role: "EXPERT",
        isVerified: true,
        expertProfile: {
            specialization: ["Astrology", "Palmistry", "Vastu"],
            bio: "Traditional Vedic Astrologer from Varanasi. Expert in Kundali matching and Dosha Nivaran.",
            experience: 25,
            languages: ["Hindi", "Sanskrit"],
            hourlyRate: 2100,
            rating: 4.9,
            totalSessions: 5000,
            totalReviews: 4200,
            isOnline: false,
            profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pandit",
            availability: [
                { day: "Monday", startTime: "08:00", endTime: "14:00" },
                { day: "Tuesday", startTime: "08:00", endTime: "14:00" },
                { day: "Wednesday", startTime: "08:00", endTime: "14:00" },
                { day: "Thursday", startTime: "08:00", endTime: "14:00" },
                { day: "Friday", startTime: "08:00", endTime: "14:00" },
                { day: "Saturday", startTime: "08:00", endTime: "14:00" },
                { day: "Sunday", startTime: "08:00", endTime: "14:00" }
            ]
        }
    },
    {
        name: "Sarah Jones",
        email: "sarah.jones@example.com",
        password: "password123",
        role: "EXPERT",
        isVerified: true,
        expertProfile: {
            specialization: ["Tarot", "Psychic"],
            bio: "International Psychic Medium and Tarot Reader. Connecting you with your spirit guides.",
            experience: 12,
            languages: ["English"],
            hourlyRate: 3000,
            rating: 4.7,
            totalSessions: 900,
            totalReviews: 600,
            isOnline: true,
            profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            availability: [
                { day: "Monday", startTime: "18:00", endTime: "23:00" },
                { day: "Tuesday", startTime: "18:00", endTime: "23:00" },
                { day: "Wednesday", startTime: "18:00", endTime: "23:00" }
            ]
        }
    }
];

const seedExperts = async () => {
    try {
        console.log('Starting seed script...');
        const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
        console.log('URI present:', !!uri);

        if (!uri) {
            throw new Error('MongoDB URI is missing in .env file');
        }

        await mongoose.connect(uri);
        console.log('✅ MongoDB Connected');

        for (const expertData of experts) {
            const existingUser = await User.findOne({ email: expertData.email });
            if (existingUser) {
                console.log(`⚠️ Expert ${expertData.name} already exists`);
                continue;
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            expertData.password = await bcrypt.hash(expertData.password, salt);

            await User.create(expertData);
            console.log(`✅ Created expert: ${expertData.name}`);
        }

        console.log('🎉 Seeding complete!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedExperts();
