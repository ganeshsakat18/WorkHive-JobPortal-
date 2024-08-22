<h1 align="center">WorkHive - Job Portal 🌐</h1>


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

###Demo
![Demo App](/frontend/1.png)
![Demo App](/frontend/2.png)
![Demo App](/frontend/3.png)
![Demo App](/frontend/4.png)

### Setup

Create a `.env` file in the root directory with the following environment variables:

```bash
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017
FRONTEND_URL=http://localhost:5173
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_API_KEY=your_cloudinary_api_key
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_email_password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
