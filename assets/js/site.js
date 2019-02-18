/* This is all a bit of a hack, but oh well */
export function ixm (hljs) {
  hljs.registerLanguage('ixm', function (hljs) {
    return {
      k: {
        "function": "FetchContent_MakeAvailable FetchContent_Declare",
        "built_in": "FetchContent",
        "keyword": "include cmake_minimum_required",
        "literal": "VERSION URL",
        "variable": "ixm",
  
      },
      c: [hljs.NM, hljs.HCM, hljs.QSM]
    }
  });
}
