declare module '*.md' {
  const content: string;
  export default content;
}

declare module '!!raw-loader!*.ts' {
  const content: string;
  export default content;
}
