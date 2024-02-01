const axios = require("axios");

const body = {
  resourceLogs: [
    {
      resource: {
        attributes: [
          {
            key: "service.name",
            value: {
              stringValue: "my-deno-service",
            },
          },
          {
            key: "telemetry.sdk.language",
            value: {
              stringValue: "nodejs",
            },
          },
          {
            key: "telemetry.sdk.name",
            value: {
              stringValue: "opentelemetry",
            },
          },
          {
            key: "telemetry.sdk.version",
            value: {
              stringValue: "1.17.0",
            },
          },
          {
            key: "host.name",
            value: {
              stringValue: "Warrens-MacBook-Pro.local",
            },
          },
          {
            key: "host.arch",
            value: {
              stringValue: "arm64",
            },
          },
          {
            key: "os.type",
            value: {
              stringValue: "darwin",
            },
          },
          {
            key: "os.version",
            value: {
              stringValue: "23.3.0",
            },
          },
          {
            key: "host.id",
            value: {
              stringValue: "3F4DD0EA-2C33-5E52-BA6F-8C932C8D61DC",
            },
          },
          {
            key: "process.pid",
            value: {
              intValue: 30910,
            },
          },
          {
            key: "process.executable.name",
            value: {
              stringValue: "deno",
            },
          },
          {
            key: "process.executable.path",
            value: {
              stringValue: "/opt/homebrew/bin/deno",
            },
          },
          {
            key: "process.command_args",
            value: {
              arrayValue: {
                values: [
                  {
                    stringValue: "/opt/homebrew/bin/deno",
                  },
                  {
                    stringValue:
                      "/Users/warren/Codes/hyperdx/hyperdx-deno/full-otel-example.ts",
                  },
                ],
              },
            },
          },
          {
            key: "process.runtime.version",
            value: {
              stringValue: "18.17.1",
            },
          },
          {
            key: "process.runtime.name",
            value: {
              stringValue: "nodejs",
            },
          },
          {
            key: "process.runtime.description",
            value: {
              stringValue: "Node.js",
            },
          },
          {
            key: "process.command",
            value: {
              stringValue:
                "/Users/warren/Codes/hyperdx/hyperdx-deno/full-otel-example.ts",
            },
          },
          {
            key: "process.owner",
            value: {
              stringValue: "warren",
            },
          },
        ],
        droppedAttributesCount: 0,
      },
      scopeLogs: [
        {
          scope: {
            name: "deno-logger",
          },
          logRecords: [
            {
              timeUnixNano: Date.now() * 1000000,
              observedTimeUnixNano: Date.now() * 1000000,
              severityNumber: 9,
              severityText: "INFO",
              body: {
                stringValue: "👋 Hello from Deno!",
              },
              attributes: [
                {
                  key: "loggerName",
                  value: {
                    stringValue: "my-otel-logger",
                  },
                },
              ],
              droppedAttributesCount: 0,
              flags: 1,
              traceId: "047833eeef9af7e048839f4685667c44",
              spanId: "e897c0c71b979fcb",
            },
            {
              timeUnixNano: Date.now() * 1000000,
              observedTimeUnixNano: Date.now() * 1000000,
              severityNumber: 17,
              severityText: "ERROR",
              body: {
                stringValue: "Oh no an error!!",
              },
              attributes: [
                {
                  key: "loggerName",
                  value: {
                    stringValue: "my-otel-logger",
                  },
                },
              ],
              droppedAttributesCount: 0,
              flags: 1,
              traceId: "047833eeef9af7e048839f4685667c44",
              spanId: "e897c0c71b979fcb",
            },
            {
              timeUnixNano: Date.now() * 1000000,
              observedTimeUnixNano: Date.now() * 1000000,
              severityNumber: 9,
              severityText: "INFO",
              body: {
                stringValue: '{"foo":"bar","baz":"qux"}',
              },
              attributes: [
                {
                  key: "loggerName",
                  value: {
                    stringValue: "my-otel-logger",
                  },
                },
              ],
              droppedAttributesCount: 0,
              flags: 1,
              traceId: "047833eeef9af7e048839f4685667c44",
              spanId: "e897c0c71b979fcb",
            },
          ],
        },
      ],
    },
  ],
};

const main = async () => {
  const response = await axios.post(
    "http://localhost:4318/v1/logs",
    body,
    {
      headers: {
        Authorization: "<API_KEY>"
      },
    },
  );
};

main();
