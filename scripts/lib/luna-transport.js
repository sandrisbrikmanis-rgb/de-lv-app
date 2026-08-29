/**
 * Dependency-injected Luna transport — mock by default (realCalls = 0 in F0).
 */
function createMockLunaTransport(fixtureMap = {}) {
  let realCalls = 0;
  return {
  get realCallsDelta() {
    return 0;
  },
  async call(payload) {
    const key = `${payload.adapter}:${payload.scopeId}`;
    const fixture = fixtureMap[key] || fixtureMap[payload.adapter] || fixtureMap.default;
    if (!fixture) {
      return {
        items: payload.objects.map((obj, idx) => ({
          ...obj,
          id: obj.id || `mock-${idx}`,
        })),
        tokensUsed: 0,
      };
    }
    if (fixture.error) throw new Error(fixture.error);
    if (fixture.malformed) return fixture.malformed;
    if (fixture.partial) {
      return {
        items: payload.objects.slice(0, Math.max(0, payload.objects.length - 1)),
        tokensUsed: 0,
      };
    }
    return {
      items: payload.objects.map((obj) => ({ ...obj, lunaProcessed: true })),
      tokensUsed: fixture.tokensUsed || 0,
    };
  },
  getRealCalls() {
    return realCalls;
  },
};
}

function createLunaTransport(options = {}) {
  if (options.mock || process.env.LUNA_MOCK !== '0') {
    return createMockLunaTransport(options.fixtureMap || {});
  }
  return createMockLunaTransport(options.fixtureMap || {});
}

module.exports = {
  createLunaTransport,
  createMockLunaTransport,
};
