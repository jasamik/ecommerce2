﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Entities
{
    public class Usuario
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Email { get; set; }
        public string   Password { get; set; }
        public string Modo { get; set; }
        public string foto { get; set; }

    }
}
