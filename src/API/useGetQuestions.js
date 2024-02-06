import supabase from "./supabase";

export async function getQuestions(id) {
  const { data, error } = await supabase.from("Questions").select("*");

  if (error) {
    console.error(error);
    throw new Error("Questions not found");
  }

  console.log(data);
  return data;
}
