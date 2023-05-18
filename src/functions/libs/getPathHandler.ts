//utilitario para obtener la ruta del handler
export const getPathHandler = (pathDirName: string) => {
    return pathDirName.split(process.cwd())[1].substring(1).replace(/\\/g, "/");
  };
  