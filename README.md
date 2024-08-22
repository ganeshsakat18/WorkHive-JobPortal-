<h1 align="center">WorkHive - Job Portal 🌐</h1>

![Demo App](/frontend/1.png)

### Overview

Welcome to **WorkHive**, a dynamic job portal designed to connect employers with job seekers seamlessly. Whether you're an employer looking to publish job openings or a job seeker aiming to find your next opportunity, WorkHive provides a comprehensive platform with a range of features to enhance your job search and hiring process.

### Features

- 💼 **For Employers**:
  - Post job openings with detailed descriptions, requirements, and salary information.
  - Manage job listings and view applications from interested candidates.
  - Access a streamlined interface to efficiently handle recruitment needs.

- 👩‍💼 **For Job Seekers**:
  - Browse and apply for jobs that match your skills and interests.
  - Upload your resume to **Cloudinary** for secure and convenient storage.
  - Receive notifications about new job openings and application statuses.

- ⚙️ **Technical Stack**:
  - **Backend**: Node.js, Express.js, MongoDB
  - **Frontend**: React.js, Redux, Bootstrap
  - **Storage**: Cloudinary for resume uploads
  - **Additional Features**: Automation and authorization for enhanced security and efficiency

- 📱 **Responsive Design**: Fully optimized for a smooth experience on both desktop and mobile devices.

### Setup

Create a `.env` file in the root directory with the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
