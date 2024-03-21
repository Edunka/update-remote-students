const updateRemoteStudents = require('./updateRemoteStudents');

describe('updateRemoteStudents', () => {
    test('should return an empty array if given an empty array', () => {
        const students = [];
        const result = updateRemoteStudents(students);
        expect(result).toEqual([]);
        expect(students).toEqual([]);
    });

    test('should update location to "remote" for students without location', () => {
        const students = [
            { name: 'Euler', age: 27 },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47 }
        ];

        const expected = [
            { name: 'Euler', age: 27, location: 'remote' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'remote' }
        ];

        const result = updateRemoteStudents(students);
        expect(result).toEqual(expected);
        expect(students).toEqual([
            { name: 'Euler', age: 27 },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47 }
        ]);
    });

    test('should not mutate location for students with existing locations', () => {
        const students = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];

        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
        ];

        const result = updateRemoteStudents(students);
        expect(result).toEqual(expected);
        expect(students).toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
        ]);
    });
    test('should handle students with additional properties', () => {
        const students = [
            { name: 'Alice', age: 25, location: 'remote', gender: 'female' },
            { name: 'Bob', age: 30, gender: 'male' }
        ];
    
        const expected = [
            { name: 'Alice', age: 25, location: 'remote', gender: 'female' },
            { name: 'Bob', age: 30, location: 'remote', gender: 'male' }
        ];
    
        const result = updateRemoteStudents(students);
        expect(result).toEqual(expected);
    });
    
    test('should handle students with empty string as location', () => {
        const students = [
            { name: 'Charlie', age: 22, location: '' },
            { name: 'David', age: 27, location: 'remote' }
        ];
    
        const expected = [
            { name: 'Charlie', age: 22, location: 'remote' },
            { name: 'David', age: 27, location: 'remote' }
        ];
    
        const result = updateRemoteStudents(students);
        expect(result).toEqual(expected);
    });
    
    test('should handle students with undefined or null as location', () => {
        const students = [
            { name: 'Eve', age: 29, location: undefined },
            { name: 'Frank', age: 35, location: null },
            { name: 'Grace', age: 31 }
        ];
    
        const expected = [
            { name: 'Eve', age: 29, location: 'remote' },
            { name: 'Frank', age: 35, location: 'remote' },
            { name: 'Grace', age: 31, location: 'remote' }
        ];
    
        const result = updateRemoteStudents(students);
        expect(result).toEqual(expected);
    });
    
});
