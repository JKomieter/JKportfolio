import { AI, CampusCommune } from "./components/svg";

export const projectdata = {
    "emoticare": {
        title: "Emoticare AI",
        short_description: "Our goal is to use AI to provide empathetic support, empowering users on their emotional journeys",
        video: "",
        image: "/images/Emoticare.png",
        overview: "Emoticare AI is a mental health chatbot that uses AI to provide empathetic support, empowering users on their emotional journeys. Our goal is to use AI to provide empathetic support, empowering users on their emotional journeys. We are a team of passionate students from the University of California, Berkeley, who are dedicated to improving mental health care. We believe that everyone deserves access to quality mental health care, and we are committed to making this a reality. We are a team of passionate students from the University of California, Berkeley, who are dedicated to improving mental health care. We believe that everyone deserves access to quality mental health care, and we are committed to making this a reality. We are a team of passionate students from the University of California, Berkeley, who are dedicated to improving mental health care. We believe that everyone deserves access to quality mental health care, and we are committed to making this a reality.",
        tools: [
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "Docker",
            "Jest",
            "NLP",
            "Machine Learning",
        ],
        challenge: "One of the initial challenges we encountered was a port conflict between our TypeScript server and Flask server, both essential components of the EmoticareAI app. This issue prevented them from communicating effectively through API endpoints. After careful investigation, we identified the conflict and successfully resolved it. This allowed seamless communication between the frontend and the backend, ensuring that the app functioned as intended. Achieving high accuracy in the AI model's responses to user inputs was a critical challenge. Emotional well-being applications rely heavily on the model's ability to provide appropriate and empathetic responses. Initially, our model's accuracy needed improvement. Through rigorous training, fine-tuning, and the incorporation of advanced Natural Language Processing (NLP) techniques, we were able to significantly enhance the model's accuracy, achieving an impressive 80% accuracy rate. This improvement was pivotal in creating a more effective and user-friendly EmoticareAI experience",
        features: [
            {
                name: "Journaling Feature",
                description: "EmoticareAI offers users a unique journaling feature that enables them to record their emotions and thoughts throughout the day or in the moment. Users can freely express their feelings, thoughts, and experiences within the app. What sets EmoticareAI apart is its AI-powered response system. Upon journaling, the app provides personalized responses that mimic the empathy and support of a trusted friend. Users receive words of encouragement, advice, or simply a friendly response tailored to their emotional state."
            },
            {
                name: "Emotion Detection and Response",
                description: "The EmoticareAI app incorporates advanced facial recognition technology. Using the device's camera, the app detects the user's facial expressions and analyzes their emotional state. Based on this analysis, the app responds with appropriate emotional support. Whether a user is feeling happy, sad, anxious, or any other emotion, EmoticareAI provides empathetic responses to help users navigate their emotions. This feature creates a unique and interactive emotional support system, akin to having a caring friend by your side."
            }
        ],
        githubLink: "https://github.com/rishikeshydv/emoticareai",
        liveLink: "https://emoticareai.com/",
        state: "We are in the process of Dockerizing the app, which will improve its deployment efficiency and scalability, ensuring a seamless experience for users. We are dedicated to enhancing the accuracy and responsiveness of the AI chatbot. This involves fine-tuning the underlying natural language processing (NLP) models for better understanding and more empathetic responses. We're giving the app a facelift with improved user interface (UI) and user experience (UX) designs. This will make the app more visually appealing and intuitive for users.",
        HeroIcon: <AI className="w-72 h-72 text-neutral-100" />
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
        challenge: "One of the key challenges I encountered during the development of Campus Commune was deciding how to handle the storage of various types of media files, including images, PDFs, audios, and videos. I needed a solution that would allow efficient storage and retrieval of these files while ensuring scalability and performance.Initially, I had to make a critical decision between using Firebase Storage and Firebase Firestore for managing these files.Firebase Firestore provided an elegant way to reference files with its document- based structure, making it easy to associate files with specific database entries. However, it had limitations when it came to handling large files effectively. On the other hand, Firebase Storage excelled in storing large media files efficiently, which was crucial for our application's functionality. However, referencing and associating files in Firebase Storage was not as straightforward as it was in Firestore. To overcome this challenge, I had to architect the system very wisely.I devised a strategy to segment and organize the files in Firebase Storage so that they could be easily retrieved and referenced within the application.This segmentation allowed us to maintain a logical structure, ensuring that each file could be associated with the relevant user, group, or content item in Campus Commune. This experience was a valuable lesson in system architecture and database design.It required careful consideration of both the storage needs of our application and the ease of reference for these files.In the end, I successfully architected the system to achieve our goal of efficiently managing and retrieving various media files while maintaining the performance and scalability required for a platform like Campus Commune.",
        features: [
            {
                name: "Discussion Forums",
                description: "One of the core features of Campus Commune is its discussion forums. Students can create discussion groups dedicated to specific topics or courses, facilitating focused conversations."
            },
            {
                name: "Online Groups (CamSpaces)",
                description: "Campus Commune allows students to create online groups called CamSpaces. These groups can be used for a variety of purposes, including clubs, organizations, and study groups."
            },
            {
                name: "Post, Comment, and Like",
                description: "Users can post questions related to specific topics, comment on existing posts, and express their appreciation by liking posts. This interactive feature promotes engagement and knowledge sharing."
            },
            {
                name: "Course Discussions",
                description: "Campus Commune provides the option to join course-specific discussion groups. These groups become hubs for sharing notes, discussing course materials, and gaining insights from peers."
            },
            {
                name: "Notes and Resources",
                description: "Students can upload and share notes and resources with their peers. This feature allows students to collaborate and learn from each other."
            }
        ],
        githubLink: "https://github.com/JKomieter/CampusCommune",
        liveLink: "https://campus-commune.vercel.app/",
        state: "I'm currently working on making the app more personal by provinding a personalized feed for each user. I'm also working on adding a feature to allow users to create and join events, find roomates and also find their lost items.",
        HeroIcon: <CampusCommune className="w-72 h-72 text-neutral-100" />
    },
}