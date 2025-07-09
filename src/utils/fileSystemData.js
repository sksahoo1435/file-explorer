
export const initialFileSystem = {
  id: "root",
  name: "root",
  type: "folder",
  children: [
    {
      id: "folder1",
      name: "Documents",
      type: "folder",
      children: [
        {
          id: "file1",
          name: "Resume.pdf",
          type: "file",
          content: "This is a sample resume content for preview."
        },
        { id: "file2", name: "CoverLetter.docx", type: "file" }
      ]
    },
    {
      id: "folder2",
      name: "Pictures",
      type: "folder",
      children: []
    }
  ]
};
