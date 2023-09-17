export const projectdata = {
    "emoticare": {
        title: "Emoticare AI",
        short_description: "Our goal is to use AI to provide empathetic support, empowering users on their emotional journeys",
        video: "",
        image: "/images/Emoticare.png",
        overview: "Emoticare AI is a mental health chatbot that uses AI to provide empathetic support, empowering users on their emotional journeys. Our goal is to use AI to provide empathetic support, empowering users on their emotional journeys. We are a team of passionate students from the University of California, Berkeley, who are dedicated to improving mental health care. We believe that everyone deserves access to quality mental health care, and we are committed to making this a reality. We are a team of passionate students from the University of California, Berkeley, who are dedicated to improving mental health care. We believe that everyone deserves access to quality mental health care, and we are committed to making this a reality. We are a team of passionate students from the University of California, Berkeley, who are dedicated to improving mental health care. We believe that everyone deserves access to quality mental health care, and we are committed to making this a reality."
    },
    "campus-commune": {
        title: "Campus Commune",
        short_description: "A social media platform for students to connect with their peers and professors",
        video: "/images/CampusCommune.mp4",
        image: "/images/CampusCommune.png",
        overview: "At Campus Commune, I believe that every student's journey through college or university should be more than just attending classes. It's a transformative period in your life, filled with opportunities to learn, grow, and connect. My mission is to make this journey as rewarding and supportive as possible. Campus Commune is your virtual campus hub, connecting you with fellow students, mentors, and resources like never before. Whether you're a freshman eager to make friends or a senior looking to share your wisdom, this platform is for you. In the world of higher education, knowledge is power. My platform enables students to share notes, insights, and valuable experiences across various classes and majors. Say goodbye to the struggle of finding study materials!",
        tools: [
            "Next.js",
            "Tailwind CSS",
            "Firebase",
            "Docker",
            "Jest"
        ],
        challenge: "One of the key challenges I encountered during the development of Campus Commune was deciding how to handle the storage of various types of media files, including images, PDFs, audios, and videos. I needed a solution that would allow efficient storage and retrieval of these files while ensuring scalability and performance.Initially, I had to make a critical decision between using Firebase Storage and Firebase Firestore for managing these files.Firebase Firestore provided an elegant way to reference files with its document- based structure, making it easy to associate files with specific database entries. However, it had limitations when it came to handling large files effectively. On the other hand, Firebase Storage excelled in storing large media files efficiently, which was crucial for our application's functionality. However, referencing and associating files in Firebase Storage was not as straightforward as it was in Firestore. To overcome this challenge, I had to architect the system very wisely.I devised a strategy to segment and organize the files in Firebase Storage so that they could be easily retrieved and referenced within the application.This segmentation allowed us to maintain a logical structure, ensuring that each file could be associated with the relevant user, group, or content item in Campus Commune. This experience was a valuable lesson in system architecture and database design.It required careful consideration of both the storage needs of our application and the ease of reference for these files.In the end, I successfully architected the system to achieve our goal of efficiently managing and retrieving various media files while maintaining the performance and scalability required for a platform like Campus Commune."
        },
}