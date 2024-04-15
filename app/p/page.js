"use client"
import BoolQuestion from "@/components/kunjungan/BoolQuestion";
import { useEffect, useState } from "react";
import { Button, Stack, Table } from "react-bootstrap";
import { v4 } from 'uuid';

export default function Home() {
  const defaultQ1 = [
    {
      q: "Apakah anda merokok?",
      // qSlug: "merokok",
      a: null
    },
    {
      q: "Makan sayur dan buah <5 Porsi Sehari?",
      // qSlug: "makanSayur",
      a: null
    },

    {
      q: "Kurang aktivitas fisik?",
      // qSlug: "aktivitasFisik",
      a: null
    },

    {
      q: "Konsumsi minuman beralkohol?",
      // qSlug: "minumAlkohol",
      a: null
    },
    {
      q: "Kesulitan tidur di malam hari & hilangnya nafsu makan?",
      // qSlug: "sulitTidurDanMakan",
      a: null
    }
  ]

  const [q1, setQ1] = useState([])
  const [cursor, setCursor] = useState(0);
  const currentQna = cursor > 0 ? q1[cursor - 1] : null;

  function onNext (qna, isYes=false) {
    if(cursor > 0) {
      setCursor(prev => prev + 1)
    } else if (cursor >= defaultQ1.length) {
      setCursor(0)
    } // endif

    setQ1(prev => {
      return prev.map(q => {
        console.log({qna, q})
        if (qna.uid === q.uid) {
          q.a = isYes
        } // endif

        return q
      })
    })
  }

  useEffect(() => {
    setQ1(defaultQ1.map(a => {
      a.uid = v4()
      return a
    }))
  }, []);

  const currentAnswer = (<pre>
    {
      JSON.stringify(q1)
    }
  </pre>)

  const tableResult = (
    q1.length > 0 &&
    <Table striped>
      <thead>
        <th>#</th>
        <th>Pemeriksaan</th>
        <th>Hasil</th>
      </thead>
      <tbody>
        {
          q1.map((q, idx) => (
            <tr key={q.uid}>
              <td>{idx + 1}</td>
              <td>{q.q}</td>
              <td>{
                typeof q.a === "boolean" ?
                q.a ? "Iya" : "Tidak"
                : "--"
                }</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )

  const defaultScreen = (
    <>
      <h1>Halo, Selamat Datang</h1>
      <div>
        <Button variant="primary" onClick={() => setCursor(1)}>Mulai Kunjungan</Button>
      </div>
      { currentAnswer }
      { tableResult }
    </>
  )

  return (
    <Stack gap={3}>
      {
        currentQna ?
        <BoolQuestion
          question={currentQna.q}
          onYes={() => onNext(currentQna, true)}
          onNo={() => onNext(currentQna, false)}
        /> :
        defaultScreen
      }
    </Stack>
  )
}
