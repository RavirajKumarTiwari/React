import React from 'react'
import Card from "./Card"

const Cards = (props) => {
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = React.useState([]);
  let category = props.category;

  const getCourses = () => {
    let allCourses = [];

    // Filter courses based on category
    if (category === 'All') {
      // Returns all courses received from the api response
      Object.values(courses).forEach((array) => {
        array.forEach((coursesData) => {
          allCourses.push(coursesData);
        });
      });
      return allCourses;
    }
    else { 
      // Returns courses based on the category
      return courses[category];
    }
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses } setLikedCourses = {setLikedCourses} />
        })
      }
    </div>
  )
};

export default Cards