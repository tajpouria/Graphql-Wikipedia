import request from "supertest";

import { app } from "../../expressServer";

describe("REST: openSearch", () => {
    it("Opensearch test ", async done => {
        const res = await request(app).get("/openSearch");

        expect(res.status).toBe(200);

        done();
    });
});
