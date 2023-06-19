# Run & contribute this project locally

> you can run & contribute to this project by following the steps below:

### 1. Fork this repository

### 2. Clone the fork repository to your local machine

### 3. Navigate to the project directory

    cd AI-Fusion

### 4. Install dependencies

    npm ci

### 5. Run the project

    npm run dev

### 6. Create a new branch

    git checkout -b <your_branch_name>

### 7. Make changes in source code

### 8. Stage your changes

    git add --all

### 9. Commit your changes

    git commit -m "<your_commit_message>"

> **Note**: Add a proper commit message that describes the changes you have made. Follow this [guide](https://www.conventionalcommits.org/en/v1.0.0/) to write good commit messages.

### 10. Add upstream url

    git remote add upstream https://github.com/PriyansuMaurya/AI-Fusion

### 11. Push your changes

    git push -u origin <your_branch_name>

### 12. Create a pull request

> **Note**: Add a proper title and description to your pull request that describes the changes you have made. Wait for the maintainer to review your pull request.

### 13. Congratulations! 🎉 you've made your contribution to AI-Fusion project.

# Add new data

Follow above guide to fork, clone, run in local machine after that follow below steps to add new data.

### 1. Add new data in `database` folder (database folder is in root directory)

> there are three `json` file according to their category. Add new data in respective file.

### 2. Follow the json code format to add new data

    {
    "title": "Name of the product",
    "description": "Description of the product",
    "url": "URL of the product",
    "tags": [ "tag1", "tag2" ]
    },

### 3. Now stage, commit and push your changes

### 4. Create a pull request

### 5. Congratulations! 🎉 you've made your contribution to AI-Fusion project.
