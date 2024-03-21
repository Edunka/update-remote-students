function updateRemoteStudents (students) {
    return students.map(student => ({
      ...student,
      location: student.location || 'remote'
  }));
  }
  
  module.exports = updateRemoteStudents;