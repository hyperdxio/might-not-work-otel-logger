import axios from "axios";

// TODO: Need to massage the body format in the logger
const body = {
  resourceLogs: [
    {
      resource: {
        attributes: [
          {
            key: "service.name",
            value: {
              stringValue: "my-service",
            },
          },
        ],
        droppedAttributesCount: 0,
      },
      scopeLogs: [
        {
          scope: {
            name: "otel-logger",
          },
          logRecords: [
            {
              timeUnixNano: Date.now() * 1000000,
              observedTimeUnixNano: Date.now() * 1000000,
              severityNumber: 9,
              severityText: "INFO",
              body: {
                stringValue: "👋 Hello from HyperDX!",
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

// TODO: Implement Logger Class here...💪💪💪
// Need to spin up HyperDX locally to see the logs in the UI
export default class Logger {
  constructor(
    private readonly apiKey: string,
  ) {
  }

  // TODO: Implement the log method here...
  async info() {
    await axios.post(
      "http://localhost:4318/v1/logs",
      body,
      {
        headers: {
          Authorization: this.apiKey,
        },
      },
    );
  }
}
