const employees = [
    {
        "id": 1,
        "firstName": "Rohan",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile data for the monthly sales report.",
                "taskDate": "2024-10-22",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Meeting with client X to discuss project requirements.",
                "taskDate": "2024-10-23",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the code for the latest feature implementation.",
                "taskDate": "2024-10-21",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Aarav",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Update Project Documentation",
                "taskDescription": "Add new sections to the project documentation.",
                "taskDate": "2024-10-25",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Backend API Development",
                "taskDescription": "Develop and test new APIs for the project.",
                "taskDate": "2024-10-22",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix bugs in the login module.",
                "taskDate": "2024-10-20",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Prepare Test Cases",
                "taskDescription": "Write test cases for the new API.",
                "taskDate": "2024-10-26",
                "category": "QA",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Nikhil",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design Mockups",
                "taskDescription": "Create design mockups for the new project.",
                "taskDate": "2024-10-21",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Deploy App",
                "taskDescription": "Deploy the application on production servers.",
                "taskDate": "2024-10-24",
                "category": "Deployment",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Anjali",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Data Migration",
                "taskDescription": "Migrate data from the old database to the new system.",
                "taskDate": "2024-10-22",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Create Marketing Plan",
                "taskDescription": "Outline the marketing strategy for the upcoming quarter.",
                "taskDate": "2024-10-27",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    }
]

const admin = [
    {
        "id": 1,
        // "firstName": "Sanjay",
        "email": "admin@example.com",
        "password": "123"
    }
]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}
