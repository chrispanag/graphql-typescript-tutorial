import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [ProjectResolver, TaskResolver],
        emitSchemaFile: true
    });

    const server = new GraphQLServer({
        schema,

    });

    server.start({ port: 3000 }, () => console.log("Server is running on http://localhost:"));
}

bootstrap();