import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, reply) => {
    return { Hello: "World" };
})

if (require.main === module) {
    let defaultHandler: any = app.listen({ port: 3000 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    })
}

export default app;