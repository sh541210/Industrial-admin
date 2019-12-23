const qc3_translate = {
  // 0: ['未检测'],
  // 1: ['合格'],
  3: ["第三步不合格", [

    {
      problem: "三级支架变形"
    },
    {
      problem: "垫片漏装"
    },
    {
      problem: "管口变形"
    }
  ]],
  4: ["第四步不合格", [

    {
      problem: "减速螺丝、销子漏打"
    },
    {
      problem: "U型缺口压扁"
    },
    {
      problem: "外管表面划伤"
    },
    {
      problem: "螺丝高出或下陷"
    }
  ]],
  5: ["第五步不合格", [

    {
      problem: "接地螺丝滑丝或高出"
    }
  ]],
  6: ["第六步不合格", [

    {
      problem: "手摇杆有卡紧现象"
    },
    {
      problem: "行程头与外管间隙过大（限手摇电机）"
    }
  ]],
  7: ["第七步不合格", [

    {
      problem: "内外端盖有漏打螺丝或没打紧情况（限标准型电机）"
    }
  ]],
  8: ["第八步不合格", [

    {
      problem: "内齿套不顺畅"
    }
  ]],
  9: ["第九步不合格", [

    {
      problem: "无蜗杆、网印"
    }
  ]],
  10: ["第十步不合格", [

    {
      problem: "外端盖螺丝漏打或未打紧"
    }
  ]],
  11: ["第十一步不合格", [

    {
      problem: "电源线破损"
    }
  ]]
};

export default qc3_translate;