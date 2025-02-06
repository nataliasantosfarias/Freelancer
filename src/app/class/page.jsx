import React from "react";
import MainMenu from '../components/MainMenu';


export default function Class() {
  const weekDaysOrder = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]


  const classes = [
    { day: "Terça", start: "14:00", end: "16:00", title: "Sparring" },
    { day: "Segunda", start: "08:00", end: "10:00", title: "Treino Físico" },
    { day: "Segunda", start: "10:00", end: "12:00", title: "Treino de Força" },   
    { day: "Quarta", start: "10:00", end: "12:00", title: "Treino de Resistência" },
    { day: "Quinta", start: "16:00", end: "18:00", title: "Treino Iniciante" },
    { day: "Sexta", start: "08:00", end: "10:00", title: "Treino Feminino" },
    { day: "Sábado", start: "10:00", end: "12:00", title: "Treino de competição" },
  ].sort((a, b) => {
  return weekDaysOrder.indexOf(a.day) - weekDaysOrder.indexOf(b.day);
});


  const uniqueDays = [...new Set(classes.map(({ day }) => day))]

  const weekDays = weekDaysOrder.filter(day => uniqueDays.includes(day))

  const uniqueSchedules = classes.reduce((acc, time) => {
    acc.push(time.start)

    return [...new Set(acc)]
  },[])

  const schedules = uniqueSchedules.sort((a, b) => {
    const [aHours, aMinutes] = a.split(':').map(Number);
    const [bHours, bMinutes] = b.split(':').map(Number);
  
    return aHours - bHours || aMinutes - bMinutes;
  })

  const timesheet = schedules.map((time) =>
    weekDays.map((day) => classes.find((classroom) => classroom.day === day && classroom.start === time)),
  )


  return (
   <>
   <MainMenu backgroundImage='/images/fundoMenuPrincipal.jpg' bannerImage='/images/MainMenu/atletas-sem-fundo.png'/>
   <div className="text-center w-full p-6 mt-20">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
          CONHEÇA O NOSSO HORÁRIOS DE TREINO
      </h1>

      <div>
      {/* Visualização em forma de tabela para telas maiores que sm */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr>
              <th className="p-1 md:p-2 border bg-gray-100"></th>
              {weekDays.map((dia) => (
                <th key={dia} className="p-1 md:p-2 border bg-gray-100 font-semibold">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timesheet.map((linha, index) => (
              <tr key={schedules[index]}>
                <td className="p-1 md:p-2 border font-semibold bg-gray-50">{schedules[index]}</td>
                {linha.map((aula, colIndex) => (
                  <td key={`${schedules[index]}-${weekDays[colIndex]}`} className="p-1 md:p-2 border">
                    {aula ? (
                      <div className="flex flex-col space-y-1">
                        <span className="font-medium">{aula.title}</span>
                        <span className="text-xs text-gray-500">
                          {aula.start} - {aula.end}
                        </span>
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualização em forma de cards para telas menores que sm */}
      <div className="sm:hidden space-y-4">
        {classes.map((aula, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-3 border border-gray-200">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold">{aula.title}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">{aula.day}</span>
            </div>
            <p className="text-sm text-gray-600">
              {aula.start} - {aula.end}
            </p>
          </div>
        ))}
      </div>
    </div>
   </div>
   </>
  );
}