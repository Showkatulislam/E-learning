
import Course from '../../hooks/LoadData';
import Service from '../service/Service';
import './Services.css'
const Services = () => {
        const [courses]=Course([])
    return (
        <div>
            <div className="container">
                <div className="course-container">
                    {
                      courses.map(course=><Service key={course.id} course={course}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;