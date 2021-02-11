const user = {
  name: 'slow_izzm',
  course: 'med290',
  semester: 'sp20'
};

const { name, course, semester, school = 'missouri state' } = user;

console.log(school);

