const Hapi = require("@hapi/hapi")

const Contacts = require("./contacts")

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  })

  server.route(
    {
      method: "GET",
      path: "/contacts",
      handler: () => Contacts,
    },
    {
      method: "POST",
      path: "/contacts",
      handler: (request, h) => Contacts,
    },
    {
      method: "DELETE",
      path: "/contacts/:id",
      handler: (request, h) => Contacts,
    },
  )

  await server.start()
  console.log("Server running on %s", server.info.uri)
}

process.on("unhandledRejection", (err) => {
  console.log(err)
  process.exit(1)
})

init()
