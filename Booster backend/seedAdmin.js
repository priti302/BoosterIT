require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./src/models/User");
const connectDB = require("./src/config/db");

const createSuperAdmin = async () => {
    try {
        await connectDB();

        const email = process.env.ADMIN_EMAIL || "admin@boostera.com";
        const password = process.env.ADMIN_PASSWORD || "Admin@123";
        const name = "Super Admin";

        const existingAdmin = await User.findOne({ email });
        if (existingAdmin) {
            console.log("⚠ Super Admin already exists.");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            role: "SUPER_ADMIN",
            isVerified: true,
        });

        console.log("✅ Super Admin created successfully!");
        console.log(`📧 Email: ${email}`);
        console.log(`🔑 Password: ${password}`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error creating Super Admin:", error);
        process.exit(1);
    }
};

createSuperAdmin();
