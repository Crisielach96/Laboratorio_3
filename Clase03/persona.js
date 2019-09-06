"use strict";
var Clases;
(function (Clases) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, dni, sexo) {
            this._apellido = apellido;
            this._dni = dni;
            this._nombre = nombre;
            this._sexo = sexo;
        }
        Persona.prototype.GetApelldio = function () {
            return this._apellido;
        };
        Persona.prototype.GetDni = function () {
            return this._dni;
        };
        Persona.prototype.GetNombre = function () {
            return this._nombre;
        };
        Persona.prototype.GetSexo = function () {
            return this._sexo;
        };
        Persona.prototype.ToString = function () {
            return this._apellido + "-" + this._nombre + "-" + this._dni + "-" + this._sexo;
        };
        return Persona;
    }());
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
//# sourceMappingURL=persona.js.map