// vite.config.mts
import { defineConfig } from "file:///C:/Users/ramella_d/Documents/GitHub/uni-rennes/node_modules/vite/dist/node/index.js";
import { getMaps, getMapsOptimizers, getMapsScripts, LogLevel } from "file:///C:/Users/ramella_d/Documents/GitHub/uni-rennes/node_modules/wa-map-optimizer-vite/dist/index.js";
var maps = getMaps("./maps");
var optimizerOptions = {
  logs: process.env.LOG_LEVEL && process.env.LOG_LEVEL in LogLevel ? LogLevel[process.env.LOG_LEVEL] : LogLevel.NORMAL
};
if (process.env.TILESET_OPTIMIZATION && process.env.TILESET_OPTIMIZATION === "true") {
  const qualityMin = process.env.TILESET_OPTIMIZATION_QUALITY_MIN ? parseInt(process.env.TILESET_OPTIMIZATION_QUALITY_MIN) : 0.9;
  const qualityMax = process.env.TILESET_OPTIMIZATION_QUALITY_MAX ? parseInt(process.env.TILESET_OPTIMIZATION_QUALITY_MAX) : 1;
  optimizerOptions.output = {
    tileset: {
      compress: {
        quality: [qualityMin, qualityMax]
      }
    }
  };
}
var vite_config_default = defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        ...getMapsScripts(maps)
      }
    }
  },
  plugins: [...getMapsOptimizers(maps, optimizerOptions)],
  server: {
    host: "localhost",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "Cache-Control": "no-cache, no-store, must-revalidate"
    },
    open: "/"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccmFtZWxsYV9kXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcdW5pLXJlbm5lc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccmFtZWxsYV9kXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcdW5pLXJlbm5lc1xcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3JhbWVsbGFfZC9Eb2N1bWVudHMvR2l0SHViL3VuaS1yZW5uZXMvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgZ2V0TWFwcywgZ2V0TWFwc09wdGltaXplcnMsIGdldE1hcHNTY3JpcHRzLCBMb2dMZXZlbCwgT3B0aW1pemVPcHRpb25zIH0gZnJvbSBcIndhLW1hcC1vcHRpbWl6ZXItdml0ZVwiO1xyXG5cclxuY29uc3QgbWFwcyA9IGdldE1hcHMoXCIuL21hcHNcIik7XHJcblxyXG5sZXQgb3B0aW1pemVyT3B0aW9uczogT3B0aW1pemVPcHRpb25zID0ge1xyXG4gICAgbG9nczogcHJvY2Vzcy5lbnYuTE9HX0xFVkVMICYmIHByb2Nlc3MuZW52LkxPR19MRVZFTCBpbiBMb2dMZXZlbCA/IExvZ0xldmVsW3Byb2Nlc3MuZW52LkxPR19MRVZFTF0gOiBMb2dMZXZlbC5OT1JNQUwsXHJcbn07XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuVElMRVNFVF9PUFRJTUlaQVRJT04gJiYgcHJvY2Vzcy5lbnYuVElMRVNFVF9PUFRJTUlaQVRJT04gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICBjb25zdCBxdWFsaXR5TWluID0gcHJvY2Vzcy5lbnYuVElMRVNFVF9PUFRJTUlaQVRJT05fUVVBTElUWV9NSU4gPyBwYXJzZUludChwcm9jZXNzLmVudi5USUxFU0VUX09QVElNSVpBVElPTl9RVUFMSVRZX01JTikgOiAwLjk7XHJcbiAgICBjb25zdCBxdWFsaXR5TWF4ID0gcHJvY2Vzcy5lbnYuVElMRVNFVF9PUFRJTUlaQVRJT05fUVVBTElUWV9NQVggPyBwYXJzZUludChwcm9jZXNzLmVudi5USUxFU0VUX09QVElNSVpBVElPTl9RVUFMSVRZX01BWCkgOiAxO1xyXG5cclxuICAgIG9wdGltaXplck9wdGlvbnMub3V0cHV0ID0ge1xyXG4gICAgICAgIHRpbGVzZXQ6IHtcclxuICAgICAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgICAgICAgIHF1YWxpdHk6IFtxdWFsaXR5TWluLCBxdWFsaXR5TWF4XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIGJhc2U6IFwiLi9cIixcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IFwiLi9pbmRleC5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5nZXRNYXBzU2NyaXB0cyhtYXBzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFsuLi5nZXRNYXBzT3B0aW1pemVycyhtYXBzLCBvcHRpbWl6ZXJPcHRpb25zKV0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIFBBVENILCBPUFRJT05TXCIsXHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIlgtUmVxdWVzdGVkLVdpdGgsIGNvbnRlbnQtdHlwZSwgQXV0aG9yaXphdGlvblwiLFxyXG4gICAgICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlbjogXCIvXCIsXHJcbiAgICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVSxTQUFTLG9CQUFvQjtBQUN2VyxTQUFTLFNBQVMsbUJBQW1CLGdCQUFnQixnQkFBaUM7QUFFdEYsSUFBTSxPQUFPLFFBQVEsUUFBUTtBQUU3QixJQUFJLG1CQUFvQztBQUFBLEVBQ3BDLE1BQU0sUUFBUSxJQUFJLGFBQWEsUUFBUSxJQUFJLGFBQWEsV0FBVyxTQUFTLFFBQVEsSUFBSSxTQUFTLElBQUksU0FBUztBQUNsSDtBQUVBLElBQUksUUFBUSxJQUFJLHdCQUF3QixRQUFRLElBQUkseUJBQXlCLFFBQVE7QUFDakYsUUFBTSxhQUFhLFFBQVEsSUFBSSxtQ0FBbUMsU0FBUyxRQUFRLElBQUksZ0NBQWdDLElBQUk7QUFDM0gsUUFBTSxhQUFhLFFBQVEsSUFBSSxtQ0FBbUMsU0FBUyxRQUFRLElBQUksZ0NBQWdDLElBQUk7QUFFM0gsbUJBQWlCLFNBQVM7QUFBQSxJQUN0QixTQUFTO0FBQUEsTUFDTCxVQUFVO0FBQUEsUUFDTixTQUFTLENBQUMsWUFBWSxVQUFVO0FBQUEsTUFDcEM7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0gsZUFBZTtBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsR0FBRyxlQUFlLElBQUk7QUFBQSxNQUMxQjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLEVBQ3RELFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNMLCtCQUErQjtBQUFBLE1BQy9CLGdDQUFnQztBQUFBLE1BQ2hDLGdDQUFnQztBQUFBLE1BQ2hDLGlCQUFpQjtBQUFBLElBQ3JCO0FBQUEsSUFDQSxNQUFNO0FBQUEsRUFDVjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
