
export async function onRequest(context) {
  const { request, env } = context;

  const workerUrl =
    "https://designer-deal-radar-scanner.xxskullxx008.workers.dev/api/deals";

  if (!env.API_KEY) {
    return Response.json(
      { error: "Server configuration missing" },
      { status: 500 }
    );
  }

  if (!["GET", "POST", "DELETE"].includes(request.method)) {
    return Response.json(
      { error: "Method not allowed" },
      { status: 405 }
    );
  }

  const headers = {
    Authorization: `Bearer ${env.API_KEY}`
  };

  if (request.method === "POST") {
    headers["Content-Type"] = "application/json";
  }

  const options = {
    method: request.method,
    headers
  };

  if (request.method === "POST") {
    options.body = await request.text();
  }

  const upstream = await fetch(workerUrl, options);

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
