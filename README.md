# NestJs_TaskManagement
This project serves as the back-end for .......

## Installation

### NodeJs

Node.js and NPM are bundled together
Visit the Node.js Download Page and download the latest LTS (Long Term Support) version for your operating system.

### NestJs

Open terminal on code, or command line and write the following:
    npm install -g @nestjs/cli

>[Docummentation]([https://docs.nestjs.com])

### Visual Code 

Download and install [Visual Code]([https://code.visualstudio.com/download]) 

### Postman
Download and install [Postman]([https://www.getpostman.com/downloads/])

###PostgresAdmin
Download and install [pgAdmin]([https://www.pgadmin.org/download/]) 
> [pgAdmin Windows versions_]([https://www.postgresql.org/download/windows/])

## Configuration postgresAdmin

>Run pgAdmin

>Bottom right tray icon, copy server URL

>Paste in browser

>Go to the list of servers, left tab

>Right click, create new server, give name (whatever you want), 

>Host name - localserver as we are running it locally

>Port: 5432   

>username and password should be _postgres_

>click save password

Under local it creates a postgres database, don't touch that one
Create a new database
Database name "taskmanagement"
That's it 

### Usage

Open the project on Visual Code. 

### Plugins for Visual Code

>TSlint

>TypeScript Extension 

>TypeScript Hero

>TypeScript Importer

### How to implement Guards

When implementing the guards for the admin/user roles, on the nestJs documentation provided the function

    const hasRole = () => user.roles.some(role => roles.includes(role));"


    user.roles.some --->should receive an array

So on the user.entity file there should be a column that takes in an array of strings containing the desired role.

When applying the Guards, they should be applied to the controller and then to each action like this:

  
      @Controller('tasks')
      @UseGuards(AuthGuard(), RolesGuard)
      export class TasksController {

      private logger = new Logger('TasksController');

      constructor(private tasksService: TasksService) {}

      @Get()
      @Roles('admin')
      getTasks(
        @Query(ValidationPipe) filterDto: GetTasksFilterDto,
        @GetUser() user: User,
      ): Promise<Task[]> {
        this.logger.verbose(`Mr."${user.username}" retrieving all tasks. Filters: ${JSON.stringify (filterDto) }`);
        return this.tasksService.getTasks(filterDto, user);
       } 
