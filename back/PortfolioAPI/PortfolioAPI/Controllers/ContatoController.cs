using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        private readonly IContatoService contatoService;
        public ContatoController(IContatoService contatoService) 
        {
            this.contatoService = contatoService;
        }

        [HttpPost]
        public async Task<IActionResult> EnviarEmail(InformacoesUsuario infosUser)
        {
            await contatoService.EnviarEmail(infosUser);
            return Ok();
        }
    }
}
