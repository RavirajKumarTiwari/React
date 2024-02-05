import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Check if the course is already liked
        if (likedCourses.includes(course.id)) {
            // Remove the course from the liked courses
            setLikedCourses(likedCourses.filter((id) => id !== course.id));
            toast.warning("Unliked 👎");
        }
        // If the course is not liked
        else {
            // Add the course to the liked courses
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                // Add the course to the non empty liked courses
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked 👍");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-70 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt="thumbnail"></img>

                <div className="w-[35px] h-[35px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? (
                            <FcLike fontSize="1.75rem"/>
                        ) : (
                            <FcLikePlaceholder fontSize="1.75rem" />
                        )}
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">
                    {course.title}
                </p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ?
                            (course.description.substring(0, 100) + "...")
                            : course.description
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;
